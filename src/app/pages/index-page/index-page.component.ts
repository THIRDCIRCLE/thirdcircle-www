import { Component, HostBinding } from '@angular/core';
import { HostBindingProperty } from '@libs/angular';
import { TailwindCSS } from '@libs/tailwind';
import { cssClasses } from '@libs/core';

@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.component.html',
  styleUrls: ['./index-page.component.scss'],
})
export class IndexPageComponent {
  @HostBinding(HostBindingProperty.Class)
  classes = cssClasses([
    TailwindCSS.Sizing.HeightFull,
    TailwindCSS.Sizing.WidthFull,
  ]);

  data = {
    title: 'Universal Identity Pte., Ltd.',
  };
}
