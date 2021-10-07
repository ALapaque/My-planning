import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {generateCompleteUrl} from '../../../../environments/environment';
import {Observable} from 'rxjs';
import {Comment} from '../../../@shared/models/comment.model';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private _baseUrl: string = generateCompleteUrl() + '/comment';

  constructor(
    private _http: HttpClient
  ) {
  }

  save(comment: Comment): Observable<Comment> {
    let obs: Observable<Comment>;
    obs = comment.id ? this._update(comment) : this._create(comment);

    return obs.pipe(
      map((c: Comment) => new Comment(c))
    );
  }

  private _create(comment: Comment): Observable<Comment> {
    return this._http.post<Comment>(`${this._baseUrl}`, comment);
  }

  private _update(comment: Comment): Observable<Comment> {
    return this._http.put<Comment>(`${this._baseUrl}/${comment.id.toString(10)}`, comment);
  }
}
