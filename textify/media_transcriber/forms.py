from django import forms
from .models import Transcription

class TranscriptionForm(forms.ModelForm):
    class Meta:
        model = Transcription
        fields = ['media_file']
        
    def clean_audio_file(self):
        media_file = self.cleaned_data.get('media_file')
        if media_file:
            ext = media_file.name.split('.')[-1].lower()
            supported_extensions = ['mp3', 'wav','flac','aac','ogg','mp4','avi','mov','wmv','m4a'] 
            if ext not in supported_extensions:
                raise forms.ValidationError(f'Only {supported_extensions[:4]} files are allowed.')
        return media_file
