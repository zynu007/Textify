document.addEventListener('DOMContentLoaded', function() {
    const dropZone = document.getElementById('drop-zone');
    const fileInput = document.getElementById('file-input');
    const uploadForm = document.getElementById('upload-form');
    const selectButton = document.getElementById('select-button');
    const fileInfo = document.getElementById('file-info');
    const fileDetails = document.getElementById('file-details');
    const fileSize = document.getElementById('file-size');
    const fileType = document.getElementById('file-type');
    const removeFileButton = document.getElementById('remove-file');
    const startTranscriptionButton = document.getElementById('start-transcription');
    const progress = document.getElementById('progress');
    const downloadContainer = document.getElementById('download-container');
    const downloadButton = document.getElementById('download-button');
    
    let currentFile = null;
    let currentTranscriptionId = null;

    // Get CSRF token
    const csrfToken = document.querySelector('[name=csrfmiddlewaretoken]').value;

    // Drag and drop handlers
    dropZone.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropZone.classList.add('dragover');
    });

    dropZone.addEventListener('dragleave', () => {
        dropZone.classList.remove('dragover');
    });

    dropZone.addEventListener('drop', (e) => {
        e.preventDefault();
        dropZone.classList.remove('dragover');
        const files = e.dataTransfer.files;
        handleFile(files[0]);
    });

    // File input handler
    selectButton.addEventListener('click', () => {
        fileInput.click();
    });

    fileInput.addEventListener('change', (e) => {
        handleFile(e.target.files[0]);
    });

    // New function to format file size
    function formatFileSize(bytes) {
        const mb = bytes / (1024 * 1024);
        return mb.toFixed(2) + ' MB';
    }

    // Updated file handler to show file details
    function handleFile(file) {
        if (!file) return;
        
        // Validate file type
        const allowedTypes = [
            'audio/mpeg', 'audio/wav', 'audio/ogg', 'audio/flac', 'audio/x-m4a',
            'video/mp4', 'video/mkv', 'video/mov', 'video/wmv',
        ];
        
        if (!allowedTypes.includes(file.type)) {
            alert('Please upload only supported audio/video files.');
            return;
        }

        currentFile = file;
        
        // Update file details display
        fileInfo.textContent = file.name;
        fileSize.textContent = `Size: ${formatFileSize(file.size)}`;
        fileType.textContent = `Type: ${file.type}`;
        fileDetails.hidden = false;
        
        // Hide other containers
        progress.hidden = true;
        downloadContainer.hidden = true;
    }

    // New remove file handler
    removeFileButton.addEventListener('click', () => {
        currentFile = null;
        fileDetails.hidden = true;
        fileInput.value = ''; // Clear the file input
    });

    // New start transcription handler
    startTranscriptionButton.addEventListener('click', () => {
        if (!currentFile) return;
        
        const formData = new FormData(uploadForm);
        formData.set('media_file', currentFile);

        progress.hidden = false;
        fileDetails.hidden = true;

        // Upload file
        fetch('/upload/', {
            method: 'POST',
            headers: {
                'X-CSRFToken': csrfToken
            },
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                throw new Error(data.error);
            }
            progress.hidden = true;
            downloadContainer.hidden = false;
            currentTranscriptionId = data.transcription_id;
        })
        .catch(error => {
            alert('Error: ' + error.message);
            progress.hidden = true;
            fileDetails.hidden = false;
        });
    });

    // Updated download handler
    downloadButton.addEventListener('click', () => {
        if (currentTranscriptionId) {
            window.location.href = `/download/${currentTranscriptionId}/`;
        }
    });
});