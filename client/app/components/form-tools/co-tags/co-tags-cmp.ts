import { Component, OnInit, Input } from 'angular2/core'
import { NgFor } from 'angular2/common'

@Component({
  selector: 'co-tags',
  templateUrl: 'app/components/form-tools/co-tags/co-tags-cmp.html',
  directives: [NgFor]
})
export class CoTagsCmp implements OnInit {

  @Input() tags

  public ngOnInit () {
    console.log(this.tags)
  }

  typing ($event) {
    if ($event.keyCode === 13) {
      this.addTag($event.target.value)
      $event.target.value = ''
    }
  }

  addTag (newTag) {
    let exists = this.tags.some((tag) => {
      return tag === newTag
    })
    if (!exists) {
      this.tags.push(newTag)
    } else {
      console.log('already exists')
    }
  }

  removeTag (tagToRemove) {
    this.tags.splice(this.tags.indexOf(tagToRemove), 1)
  }
}
