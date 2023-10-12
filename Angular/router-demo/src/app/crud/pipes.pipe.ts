import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'appTitle',
})
export class appPipes implements PipeTransform {
  transform(
    resourceId: string,
    addText: string = "Add",
    editText: string = "Edit"
  ): string {
    return resourceId ? editText : addText;
  }
}
