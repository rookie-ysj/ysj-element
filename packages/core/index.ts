import { makeInstaller } from '@ysj-element/utils';
import components from './components.ts';
import '@ysj-element/theme'

const installer = makeInstaller(components)

export * from '@ysj-element/components'
export default installer