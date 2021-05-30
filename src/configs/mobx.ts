import { configure } from 'mobx'

export const mobxConfig = () => {
  configure({
    enforceActions: 'always',
    computedRequiresReaction: true,
    reactionRequiresObservable: true,
    observableRequiresReaction: true,
  })
}

export default mobxConfig
