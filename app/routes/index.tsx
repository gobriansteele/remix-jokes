import type { LinksFunction } from 'remix'
import styles from '../styles/index.css'
import styles2 from '../styles/anotherOne.css'

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: styles }]
}

export default function IndexRoute() {
  return <h2>Hello, I am the Index route</h2>
}
