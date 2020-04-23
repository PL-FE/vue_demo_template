import Cat from '../cat'

/**
 * A provider for quick service task production
 */
export default function NyanPaletteProvider (palette, create, elementFactory) {
  this._create = create
  this._elementFactory = elementFactory

  palette.registerProvider(this)
}

NyanPaletteProvider.$inject = [
  'palette',
  'create',
  'elementFactory'
]

NyanPaletteProvider.prototype.getPaletteEntries = function () {
  var elementFactory = this._elementFactory
  var create = this._create

  function startCreate (event) {
    var serviceTaskShape = elementFactory.create(
      'shape', { type: 'bpmn:ServiceTask' }
    )

    create.start(event, serviceTaskShape)
  }

  return {
    'create-service-task': {
      group: 'activity2',
      title: 'Create a new nyan CAT!',
      imageUrl: Cat.dataURL,
      action: {
        dragstart: startCreate,
        click: startCreate
      }
    },
    'create-service-task2': {
      group: 'activity3',
      title: 'Create a new nyan CAT!',
      imageUrl: Cat.dataURL,
      action: {
        dragstart: startCreate,
        click: startCreate
      }
    }
  }
}
