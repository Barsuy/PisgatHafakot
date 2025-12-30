import { NgFor } from '@angular/common';
import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [NgFor],
  templateUrl: './landing.html',
  styleUrl: './landing.css',
})
export class Landing {
  @ViewChild('gallery') gallery!: ElementRef<HTMLDivElement>;

  whatsappLink =
    'https://wa.me/972526833319?text=היי%20ברוך%2C%20אשמח%20לקבל%20הצעת%20מחיר%20לצילום%20אירוע';


  categories = ['חתונות', 'בר מצווה', 'ברית'];

  portfolioImages = [
    // ... תמונות לחתונה
    { src: 'assets/Wedding/wed_1.jpg', category: 'חתונות' },
    { src: 'assets/Wedding/wed_2.JPG', category: 'חתונות' },
    { src: 'assets/Wedding/wed_3.JPG', category: 'חתונות' },
    { src: 'assets/Wedding/wed_4.JPG', category: 'חתונות' },
    { src: 'assets/Wedding/wed_5.JPG', category: 'חתונות' },
    { src: 'assets/Wedding/wed_6.JPG', category: 'חתונות' },
    { src: 'assets/Wedding/wed_7.JPG', category: 'חתונות' },
    { src: 'assets/Wedding/wed_8.JPG', category: 'חתונות' },
    { src: 'assets/Wedding/wed_9.JPG', category: 'חתונות' },
    { src: 'assets/Wedding/wed_10.JPG', category: 'חתונות' },
    { src: 'assets/Wedding/wed_11.jpg', category: 'חתונות' },
    { src: 'assets/Wedding/wed_12.jpg', category: 'חתונות' },
    { src: 'assets/Wedding/wed_13.jpg', category: 'חתונות' },
    { src: 'assets/Wedding/wed_14.JPG', category: 'חתונות' },
    { src: 'assets/Wedding/wed_15.JPG', category: 'חתונות' },
    { src: 'assets/Wedding/wed_16.JPG', category: 'חתונות' },
    { src: 'assets/Wedding/wed_17.JPG', category: 'חתונות' },
    { src: 'assets/Wedding/wed_18.JPG', category: 'חתונות' },
    { src: 'assets/Wedding/wed_19.JPG', category: 'חתונות' },
    { src: 'assets/Wedding/wed_20.JPG', category: 'חתונות' },
    // ... תמונות לבר מצווה
    { src: 'assets/barmitzva/bar_1.JPG', category: 'בר מצווה' },
    { src: 'assets/barmitzva/bar_2.JPG', category: 'בר מצווה' },
    { src: 'assets/barmitzva/bar_3.JPG', category: 'בר מצווה' },
    { src: 'assets/barmitzva/bar_4.JPG', category: 'בר מצווה' },
    { src: 'assets/barmitzva/bar_5.JPG', category: 'בר מצווה' },
    { src: 'assets/barmitzva/bar_6.JPG', category: 'בר מצווה' },
    { src: 'assets/barmitzva/bar_7.JPG', category: 'בר מצווה' },
    { src: 'assets/barmitzva/bar_8.JPG', category: 'בר מצווה' },
    { src: 'assets/barmitzva/bar_9.JPG', category: 'בר מצווה' },
    { src: 'assets/barmitzva/bar_10.JPG', category: 'בר מצווה' },
    { src: 'assets/barmitzva/bar_11.JPG', category: 'בר מצווה' },
    { src: 'assets/barmitzva/bar_12.JPG', category: 'בר מצווה' },
    { src: 'assets/barmitzva/bar_13.JPG', category: 'בר מצווה' },
    { src: 'assets/barmitzva/bar_14.JPG', category: 'בר מצווה' },
    { src: 'assets/barmitzva/bar_15.JPG', category: 'בר מצווה' },
    { src: 'assets/barmitzva/bar_16.JPG', category: 'בר מצווה' },
    { src: 'assets/barmitzva/bar_17.JPG', category: 'בר מצווה' },
    // ... תמונות לברית
    { src: 'assets/Brit/brit_1.JPG', category: 'ברית' },
    { src: 'assets/Brit/brit_2.JPG', category: 'ברית' },
    { src: 'assets/Brit/brit_3.JPG', category: 'ברית' },
    { src: 'assets/Brit/brit_4.JPG', category: 'ברית' },
    { src: 'assets/Brit/brit_5.JPG', category: 'ברית' },
    { src: 'assets/Brit/brit_6.JPG', category: 'ברית' },
    { src: 'assets/Brit/brit_7.JPG', category: 'ברית' },
    { src: 'assets/Brit/brit_8.JPG', category: 'ברית' },
    { src: 'assets/Brit/brit_9.JPG', category: 'ברית' },
    { src: 'assets/Brit/brit_10.JPG', category: 'ברית' },
    { src: 'assets/Brit/brit_11.JPG', category: 'ברית' },
    { src: 'assets/Brit/brit_12.JPG', category: 'ברית' },
    { src: 'assets/Brit/brit_13.JPG', category: 'ברית' },
  ];

  selectedCategory = this.categories[0]; // ברירת מחדל - קטגוריה ראשונה

  setCategory(cat: string) {
    this.selectedCategory = cat;
    this.scrollToStart();
  }

  get filteredImages() {
    return this.portfolioImages
      .filter(img => img.category === this.selectedCategory)
      .slice(0, 12);
  }

  scrollGallery(direction: number) {
    const width = this.gallery.nativeElement.clientWidth / 3;
    this.gallery.nativeElement.scrollBy({ left: direction * width, behavior: 'smooth' });
  }

  scrollToStart() {
    this.gallery.nativeElement.scrollTo({ left: 0, behavior: 'smooth' });
  }
}
