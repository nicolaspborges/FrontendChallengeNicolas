import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.sass']
})
export class ButtonComponent {
    @Input() buttonText: string = '';
    @Input() buttonClass: string = 'standard';
    @Input() svgName: string = '';
    @Input() svgColor!: string;
    @Input() svgClass!: string;
    @Input() buttonStyle!: string;
    @Input() buttonType!: string;
    @Output() buttonAction: EventEmitter<void> = new EventEmitter();
}
