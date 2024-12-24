
import {motion} from 'framer-motion';
import {
    PaddingContainer,
    FlexContainer,
    Heading,
    ParaText,
    BlueText,
    IconContainer,
} from '../styles/Global.styled'
import showcase from "../../assets/showcase.png";
import {
   ShowcaseImageCard, 
   ShowcaseParticleContainer ,
   
  } from '../styles/Showcase.styled';
import { BsInstagram, BsLinkedin, BsTwitter, BsYoutube } from 'react-icons/bs';
import { fadeInLeftVariant, fadeInRightVariant } from '../utils/Variants';


const Showcase = () => {
  return (
    <PaddingContainer 
       id="Home"
       left="3%"
       right="10%"
       top ="5%"
       bottom="10%"
       responsiveLeft='1rem'
       responsiveRight='1rem'
       responsiveTop='8rem'

    > 
     <FlexContainer align="center" fullWidthChild>
        {/*--left-content */}
        <motion.div 
          variants={fadeInLeftVariant}
          initial="hidden"
          whileInView="visible"
        >
            
            <Heading 
               as="h2"
               size="h2"
               top="0.5rem"
               bottom='1rem'
            >
              WELCOM TO <BlueText>DESIGNFY!</BlueText> 

            </Heading>
            <Heading as="h3" size="h3">
              its about <BlueText>design and costom</BlueText> your order as you like
            </Heading>

            <ParaText as="p" top="2rem" bottom="4rem">
              you can order in whatever suit you tast!, these feature made just for you
            </ParaText>

            {/*--social icons-- */}
            <FlexContainer gap="15px" responsiveFlix>
              <IconContainer color='pink' size='1.5rem'>
                 <BsLinkedin/>
              </IconContainer>
              <IconContainer color='pink' size='1.5rem'>
                 <BsTwitter/>
              </IconContainer>
              <IconContainer color='pink' size='1.5rem'>
                 <BsYoutube/>
              </IconContainer>
              <IconContainer color='pink' size='1.5rem'>
                 <BsInstagram/>
              </IconContainer>
            </FlexContainer>

        </motion.div>

        {/*--right content-- */}
        <FlexContainer 
            as={motion.div}
            variants={fadeInRightVariant}
            initial="hidden"
            whileInView='visible'
            justify='flex-end'
        >
          <ShowcaseParticleContainer>
            <ShowcaseImageCard>
              <img src={showcase} alt='showcase'/>
            </ShowcaseImageCard>
            
            {/* <Particle
                as={motion.img}
                animate={{
                  x:[0,100,0],
                  y:[0,100,0],
                  rotate:360,
                  scale: [1,0.5,1]
                }}
                transition={{
                  duration:20,
                  repeat: Infinity,
                }}
                src={shape1}
                alt='shape1'
                top="50px"
                right="-70px"
                rotate='0deg'
            />
            <Particle
                as={motion.img}
                animate={{
                  x:[0,100,0],
                  rotate:360,
                  scale: [1,0.5,1]
                }}
                transition={{
                  duration:20,
                  repeat: Infinity,
                }}
                src={shape1}
                alt='shape1'
                bottom="-40px"
                right="20px"
                rotate='0deg'
            />
            <Particle
                as={motion.img}
                animate={{
                  x:[0,100,0],
                  y:[0,100,0],
                  rotate:360,
                  scale: [1,0.5,1]
                }}
                transition={{
                  duration:20,
                  repeat: Infinity,
                }}
                src={shape1}
                alt='shape1'
                bottom="50px"
                left="50px"
                rotate='10deg'
            />
            <Particle
                as={motion.img}
                animate={{
                  x:[0,100,0],
                  rotate:360,
                  scale: [1,0.5,1]
                }}
                transition={{
                  duration:20,
                  repeat: Infinity,
                }}
                src={shape1}
                alt='shape1'
                top="150px"
                left="-500px"
                rotate='40deg'
            />
            <Particle
                as={motion.img}
                animate={{
                  x:[0,100,0],
                  y:[0,100,0],
                  rotate:360,
                  scale: [1,0.5,1]
                }}
                transition={{
                  duration:20,
                  repeat: Infinity,
                }}
                src={shape1}
                alt='shape1'
                top="100px"
                left="280px"
                rotate='20deg'
            />
            <Particle
                as={motion.img}
                animate={{
                  x:[0,100,0],
                  rotate:360,
                  scale: [1,0.5,1]
                }}
                transition={{
                  duration:20,
                  repeat: Infinity,
                }}
                src={shape1}
                alt='shape1'
                bottom="20px"
                left="-200px"
                rotate='0deg'
            />
            <Particle
                as={motion.img}
                animate={{
                  x:[0,100,0],
                  y:[0,100,0],
                  rotate:360,
                  scale: [1,0.5,1]
                }}
                transition={{
                  duration:20,
                  repeat: Infinity,
                }}
                src={shape1}
                alt='shape1'
                bottom="350px"
                left="50px"
                rotate='0deg'
            /> */}

          </ShowcaseParticleContainer>
        </FlexContainer>

     </FlexContainer>

    </PaddingContainer> 
  )
}

export default Showcase
