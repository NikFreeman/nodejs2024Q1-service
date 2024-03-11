import { Injectable } from '@nestjs/common';
import { IAlbum } from 'src/interfaces/album';
import { IArtist } from 'src/interfaces/artist';
import { IFavorites } from 'src/interfaces/favorite';
import { ITrack } from 'src/interfaces/track';
import { IUser } from 'src/interfaces/user';

@Injectable()
export class StoreService {
  static users: IUser[] = [];
  static albums: IAlbum[] = [];
  static artists: IArtist[] = [];
  static tracks: ITrack[] = [];
  static favortes: IFavorites[] = [];
}
