import { Component } from '@angular/core';
import { UploadService } from '../../services/upload.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upload-page',
  templateUrl: './upload-page.component.html',
  styleUrls: ['./upload-page.component.css']
})
export class UploadPageComponent {
  selectedFile: File | null = null;
  result: string | null = null;

  constructor(private uploadService: UploadService, private router: Router) {}

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  uploadImage() {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('image', this.selectedFile, this.selectedFile.name);

      this.uploadService.uploadImage(formData).subscribe(
        (response) => {
          this.result = response.result;  // Assuming the response has the result of the ML model
        },
        (error) => {
          console.error('Upload failed', error);
        }
      );
    }
  }
}
