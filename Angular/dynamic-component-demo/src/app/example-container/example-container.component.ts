import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { DynamicContentOneComponent } from '../dynamic-content-one/dynamic-content-one.component';
import { DynamicContentTwoComponent } from '../dynamic-content-two/dynamic-content-two.component';



@Component({
  selector: 'app-example-container',
  templateUrl: './example-container.component.html',
  styleUrls: ['./example-container.component.css']
})
export class ExampleContainerComponent {
  @ViewChild("dynamicComponent", { read: ViewContainerRef, static: true })
  containerRef!: ViewContainerRef;

  constructor(private cfr: ComponentFactoryResolver) {}

  ngOnInit() {}

  async addDynamicCompOne() {
    const { DynamicContentOneComponent } = await import('../dynamic-content-one/dynamic-content-one.component');
    const componentFactory = this.cfr.resolveComponentFactory(
      DynamicContentOneComponent
    );
    const componentRef = this.containerRef.createComponent(componentFactory);
    componentRef.instance.data = "INPUT DATA 1";
  }

  async addDynamicCompTwo() {
    const { DynamicContentTwoComponent } = await import('../dynamic-content-two/dynamic-content-two.component');
    const componentFactory = this.cfr.resolveComponentFactory(
      DynamicContentTwoComponent
    );
    const componentRef = this.containerRef.createComponent(componentFactory);
    componentRef.instance.data = "INPUT DATA 2";
  }

  clearDynamicComp() {
    this.containerRef.clear();
  }
}
