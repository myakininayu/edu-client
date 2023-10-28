import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LessonsService {
  constructor(private http: HttpClient) {
  }

  getAll() {
    return this.http.get('http://localhost:5000/api/lesson')
  }

  createContent(data: any) {
    return this.http.post('http://localhost:5000/api/lesson/create', data)
  }
}
