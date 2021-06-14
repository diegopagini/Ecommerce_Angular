import { Injectable } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import {
  startWith,
  map,
  distinctUntilChanged,
  shareReplay,
  tap,
} from 'rxjs/operators';

const QUERY: Map<string, string> = new Map([
  ['xxl', '(min-width: 1440px)'],
  ['xl', '(min-width: 1200px)'],
  ['lg', '(min-width: 992px)'],
  ['md', '(min-width: 768px)'],
  ['sm', '(min-width: 576px)'],
  ['xs', '(min-width: 0px)'],
]);

@Injectable({
  providedIn: 'root',
})
export class BreakpointService {
  private _size$: Observable<string>;
  public static readonly mobileSizes = ['md', 'sm', 'xs'];
  public static readonly smallDesktopSizes = ['lg', 'xl'];
  public static readonly desktopSizes = ['xxl'];
  public static readonly mobileBreakpoint = 1;
  public static readonly smallDesktopBreakpoint = 2;
  public static readonly desktopBreakpoint = 3;

  constructor() {
    this._size$ = fromEvent(window, 'resize').pipe(
      startWith(this._getScreenSize()),
      map((event: Event) => this._getScreenSize()),
      distinctUntilChanged(),
      shareReplay(1)
    );
  }

  private _getScreenSize(): string {
    const [[newSize = 'never']] = Array.from(QUERY.entries()).filter(
      ([size, mediaQuery]) => window.matchMedia(mediaQuery).matches
    );
    return newSize;
  }

  public getSize$(): Observable<string> {
    return this._size$;
  }

  public isMobile$(): Observable<boolean> {
    return this._size$.pipe(
      map((size) => BreakpointService.mobileSizes.includes(size)),
      distinctUntilChanged()
    );
  }

  public isSmallDesktop$(): Observable<boolean> {
    return this._size$.pipe(
      map((size) => BreakpointService.smallDesktopSizes.includes(size)),
      distinctUntilChanged()
    );
  }

  public getCurrentBreakpoint$(): Observable<number> {
    return this._size$.pipe(
      map((size) =>
        BreakpointService.mobileSizes.includes(size)
          ? BreakpointService.mobileBreakpoint
          : BreakpointService.smallDesktopSizes.includes(size)
          ? BreakpointService.smallDesktopBreakpoint
          : BreakpointService.desktopBreakpoint
      ),
      distinctUntilChanged()
    );
  }
}
