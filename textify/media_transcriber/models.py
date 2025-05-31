from django.db import models
import os

class Transcription(models.Model):
    media_file = models.FileField(upload_to='uploads/')
    text_file = models.FileField(upload_to='transcriptions/', null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    status = models.CharField(max_length=20, default='pending')
    
    def delete(self, *args, **kwargs):
        # Delete associated files when model is deleted
        if self.media_file:
            if os.path.isfile(self.media_file.path):
                os.remove(self.media_file.path)
        if self.text_file:
            if os.path.isfile(self.text_file.path):
                os.remove(self.text_file.path)
        super().delete(*args, **kwargs)
