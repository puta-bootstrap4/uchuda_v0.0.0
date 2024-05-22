import {Adsense} from '@ctrl/react-adsense';
export default function Hoe(){
return (
// ads with no set-up
<Adsense
  client="ca-pub-7640562161899788"
  slot="7259870550"
/>

// ads with custom format
<Adsense
  client="ca-pub-7640562161899788"
  slot="7259870550"
  style={{ width: 500, height: 300 }}
  format=""
/>

// responsive and native ads
<Adsense
  client="ca-pub-7640562161899788"
  slot="7259870550"
  style={{ display: 'block' }}
  layout="in-article"
  format="fluid"
/>);

}