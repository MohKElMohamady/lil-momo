
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Rim } from '../models/rim';

@Injectable({providedIn: 'root'})
export class RimService {
    
    private url : string =  "api/rims";

    constructor(private httpClient: HttpClient) { }


    public getRims() : Observable<Rim[]> {
        return this.httpClient.get<Rim[]>(this.url);
    }

    public getRimById(id : string) : Observable<Rim> {

        const url = `${this.url}/${id}`;
        return this.httpClient.get<Rim>(url);
    }

    
}