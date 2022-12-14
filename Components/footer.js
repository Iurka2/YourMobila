import Image from "next/image";
import toast from "react-hot-toast";


const Footer = () => {
  return ( 
<>

<footer className="footer">
<span  className="button_footer hover-underline-animation"
  onClick={() =>  { navigator.clipboard.writeText('yourmobila.ro@gmail.com'); 
  
  toast.success('E-mail copied',{
  
    style: {

      background: '#333',
      color: '#fff',
    }, })}}>
yourmobila.ro@gmail.com
</span>


<div className="phonenrContainer1">

<div  className="phonenrContainer">
<p  className="phonenr"
  onClick={() =>  { navigator.clipboard.writeText('+40 727 774 655'); toast.success('Phone Copied',{
style: {
  background: '#333',
  color: '#fff',
},

  })}} >
+40 727 774 655
</p>
</div>
<div className="someContainer">
    <a href="https://www.facebook.com/IIUM-497430033789824" target="_blank" rel="noreferrer">
    <Image src="/facebook.png" width={35} height={35} alt="Facebook logo icon" className="facebook" />
    </a>
    <a href="https://wa.me/+40729359925" target="_blank" rel="noreferrer">
    <Image src="/WhatsApp 1.svg" width={50} height={50} alt="WhatsApp logo icon"/>
</a>
  </div>

</div>

<div className="footer_bottom">
 
  <p > 2022 YourMobila © </p>
 
  <p> Made by B_I_I_ </p>
</div>
</footer>

</>

   );
}
 
export default Footer;