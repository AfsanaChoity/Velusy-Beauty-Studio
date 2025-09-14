

const PolicyTermsWork = ( { sections } ) => {
 
 

  

  return (
    <div className="space-y-4 md:space-y-6">
      {/* <h1 className="text-3xl font-bold mb-6">{terms?.title || 'Terms and Conditions'}</h1> */}

      {sections?.map((section, index) => (
        <div key={index}>
          <h2 className="text-[18px] md:text-xl font-semibold mb-4">{section.title}</h2>
          <ul className="list-disc pl-5 text-xs md:text-[16px]">
              {section.content?.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
        </div>
      ))}
    </div>
  );
};

export default PolicyTermsWork;
