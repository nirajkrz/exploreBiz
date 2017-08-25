import {Injectable} from '@angular/core';
import {ClientAuth} from '../constants'

@Injectable()
export class AccessService {
    get clientId(): string { return ClientAuth.CLIENT_ID;}
    get clientSecret(): string {return ClientAuth.CLIENT_SECRET_KEY;}
}