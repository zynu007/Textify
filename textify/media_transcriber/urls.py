from django.urls import path
from . import views

app_name = 'media_transcriber'

urlpatterns = [
    path('', views.index, name='index'),
    path('upload/', views.upload_file, name='upload'),
    path('download/<int:pk>/', views.download_file, name='download'),
]