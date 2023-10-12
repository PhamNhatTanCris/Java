import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  isScrolled!: boolean;
  styleElement!: string;
  stringSearch ='';

  ngOnInit(): void {
    this.isScrolled = false;
  }

  contentSearch(){
    console.log("nội dung tìm kiếm: " + this.stringSearch);
    if(this.stringSearch){
      this.stringSearch = '';
    }
    else{
      alert("Chưa nhập nội dung tìm kiếm!")
    }
  }

  @HostListener('window: scroll', [])
  onScroll(){
    this.isScrolled = document.documentElement.scrollTop> 25;
    if(this.isScrolled){
      this.styleElement = 'opacity: 0.9;';
    }
    else{
      this.styleElement = '';
    }


  }
}
