const DynamicDescription = ({ product, preferences }) => {
    const { glutenFree, vegan } = preferences;
  
    const getDynamicDescription = () => {
      let desc = product.description;
      if (glutenFree && product.glutenFree) desc += ' (Great gluten-free option!)';
      if (vegan && product.vegan) desc += ' (Perfect for vegans!)';
      return desc;
    };
  
    return <p>{getDynamicDescription()}</p>;
  };
  
  export default DynamicDescription;
  