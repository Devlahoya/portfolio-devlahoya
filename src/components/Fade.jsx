import { useSpring, animated } from '@react-spring/web';

export function FadeIn({children}){
const styles = useSpring({
    from: { opacity: "0" },
    to: { opacity: "1" },
    config: { duration: "1500" },
  })
  

  return (
    <animated.div className="test" style={styles}>{children}</animated.div>
  );
}

export function FadeOut({children}){
    const styles = useSpring({
        from: { opacity: "0" },
        to: { opacity: "1" },
        config: { duration: "2500" },
      })
      
    
      return (
        <animated.div className="test" style={styles}>{children}</animated.div>
      );
    }
    