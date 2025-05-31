from django.shortcuts import render, get_object_or_404
from django.http import JsonResponse, FileResponse
from django.conf import settings
from .models import Transcription
from .forms import TranscriptionForm
import whisper
import os

def index(request):
    return render(request, 'media_transcriber/index.html')

def upload_file(request):
    if request.method == 'POST':
        form = TranscriptionForm(request.POST, request.FILES)
        if form.is_valid():
            try:
                # Save the transcription object
                transcription = form.save()
                os.environ["PATH"] += os.pathsep + os.path.dirname(settings.FFMPEG_PATH)
                # Load Whisper model and transcribe
                model_name= 'tiny'
                model = whisper.load_model(model_name)
                result = model.transcribe(transcription.media_file.path, fp16=False)
                
                # Save transcription to text file
                text_filename = f"transcription_{transcription.id}.txt"
                text_filepath = os.path.join(settings.MEDIA_ROOT, 'transcriptions', text_filename)
                os.makedirs(os.path.dirname(text_filepath), exist_ok=True)
                
                with open(text_filepath, 'w', encoding='utf-8') as f:
                    f.write(result["text"])
                
                # Update transcription object with text file
                transcription.text_file.name = f'transcriptions/{text_filename}'
                transcription.status = 'completed'
                transcription.save()
                
                # Delete the audio file
                os.remove(transcription.media_file.path)
                transcription.media_file = None
                transcription.save()
                
                return JsonResponse({
                    'message': 'Transcription complete',
                    'transcription_id': transcription.id
                })
            except Exception as e:
                transcription.delete()
                return JsonResponse({'error': str(e)}, status=500)
        else:
            return JsonResponse({'error': form.errors}, status=400)
    return JsonResponse({'error': 'Invalid request'}, status=400)

def download_file(request, pk):
    transcription = get_object_or_404(Transcription, pk=pk)
    if transcription.text_file:
        return FileResponse(
            open(transcription.text_file.path, 'rb'),
            as_attachment=True,
            filename=os.path.basename(transcription.text_file.name)
        )
    return JsonResponse({'error': 'File not found'}, status=404)
