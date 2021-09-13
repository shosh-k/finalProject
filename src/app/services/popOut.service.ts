import { ComponentPortal, DomPortalOutlet, PortalInjector } from '@angular/cdk/portal';
import { ApplicationRef, ComponentFactoryResolver, ComponentRef, Injectable, Injector, OnDestroy } from '@angular/core';
import { RouteComponent } from '../component/route/route.component';
import { ProductComponent } from '../component/product/product.component';

@Injectable()
export class PopoutService implements OnDestroy {
  [x: string]: any;
  styleSheetElement: any;
  constructor(
    private injector: Injector,
    private componentFactoryResolver: ComponentFactoryResolver,
    private applicationRef: ApplicationRef
  ) {
  }

  ngOnDestroy() {}

  openPopoutModal(data: any) {
    const windowInstance = this.openOnce(
      'assets/modal/popout.html',
      `${data.modalName}`
    );

    // Wait for window instance to be created
    setTimeout(() => {
      this.createCDKPortal(data, windowInstance);
    }, 1000);
  }

  openOnce(url:any, target:any) {
    // open a blank "target" window
    // or get the reference to the existing "target" window
    const winRef:any = window.open('', target, '', true);
    // if the "target" window was just opened, change its url
    if (winRef.location.href === 'about:blank') {
      winRef.location.href = url;
    }
    return winRef;
  }

  createCDKPortal(data:any, windowInstance:any) {
    if (windowInstance) {
      windowInstance.document.body.innerText = '';
      // Create a portal outlet with the body of the new window document
      const outlet = new DomPortalOutlet(windowInstance.document.body, this.componentFactoryResolver, this.applicationRef, this.injector);
      // Copy styles from parent window
      document.querySelectorAll('style').forEach(htmlElement => {
        windowInstance.document.head.appendChild(htmlElement.cloneNode(true));
      });
      // Copy stylesheet link from parent window
      this.styleSheetElement = this.getStyleSheetElement();
      windowInstance.document.head.appendChild(this.styleSheetElement);    
    }

  }

}