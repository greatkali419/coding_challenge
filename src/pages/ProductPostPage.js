import PostPageMain from "../components/PostPageComponents/PostPageMain";
import PostPageHeader from "../components/PostPageComponents/PostPageHeader";
import Bar from "../components/PostPageComponents/Bar";
import Others from "../components/PostPageComponents/Others";
import PreFooter from "../components/PostPageComponents/PreFooter";
import {motion } from "framer-motion";

const ProductPostPage = () => {
  return (
    <motion.div
    initial={{x: "-100%"}}
    animate={{x: "0"}}
    exit={{x: window.innerWidth}}>
      <PostPageHeader />
      <PostPageMain />
      <Bar />
      <Others />
      <PreFooter />
     
    </motion.div>
  )
}

export default ProductPostPage