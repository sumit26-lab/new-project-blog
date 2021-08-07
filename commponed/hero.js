import Image from 'next/image'
import classes from './hero.module.css';
function Hero(){
return(
    <section className={classes.hero}>
        <div className={classes.image}>
            <Image src="/image/site/Max.jpg" alt="An image showing Max" width={300} height={300}/>
        </div>
        <h1 >Hi I,m Next</h1>
        <p>
            I blog about web devlopment -especailly forntent Framwork Like Agular React
        </p>
    </section>
)
}
export default Hero;