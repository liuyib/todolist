import { configure } from 'mobx'

export const mobxInit = () => {
  configure({
    enforceActions: 'always',
    computedRequiresReaction: true,
    reactionRequiresObservable: true,
    observableRequiresReaction: true,
  })
}

export default mobxInit
