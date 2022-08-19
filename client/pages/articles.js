const Articles = () => {
  const arr = [
    "You are giving them the satisfaction by responding Bullies often crave attention so if more often than not, if you respond or reply to your bully it is likely that they will continue to harass you with renewed vigor",
    "You might say something that you should not have If you want to report against your perpetrator and provide the necessary documentation in a case, it is very important that you do not engage in arguments with the bully as it would weaken your case if you retaliate or resort to violence. Remember that the law enforcement agency is here to help you and so instead of taking matters into your own hands, report the offense and make the bully  accountable for his/her actions. ",
    "They might move on if they do not get a response: A lot of cyber bullies would give up on a target and move on if they feel like they failed to instill fear or to provoke their victims to respond to their threats. However, if you respond, you might stop them from doing that",
  ];
  const arr2 = [1, 2, 3];
  return (
    <div className="container_left container_right">
      <h2 className="font-bold text-xl lg:text-2xl 2xl:text-4xl text-center section-gap">
        Articles
      </h2>
      <div className="section-gap">
        {arr2.map((card, i) => {
          return (
            <div
              className="p-10 shadow-lg border rounded-lg flex flex-col gap-1 mb-10 "
              key={i}
            >
              <h3 className="font-bold text-xl lg:text-2xl pb-1 border-b mb-5">
                Cyber bullying: Why you shouldn't retaliate
              </h3>
              <p>
                Bullies do not think about the consequences of their actions.
                They would go to enormous lengths to repeatedly harass people,
                driving them to the edge even pushing them to take their own
                lives. It is unacceptable. Often times children take spur of the
                moment, rash decisions and retaliate or engage in conversation
                with the bully. Here are the reasons why you should not do
              </p>
              <ul className="my-2 mx-1">
                {arr.map((item, i) => {
                  return <li key={i} className="mb-4">-  {item}</li>;
                })}
              </ul>
              <p>
                Remember that retaliation keeps the cycle going. So do not
                respond to the bullies, do not let them get to your head, do not
                let the bullies win. Always remember that help is at hand
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Articles;
