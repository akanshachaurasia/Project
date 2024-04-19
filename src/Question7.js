import React from "react";

function Question7() {
    return (
        <div>
            <h1>7. A customer, new to Next.js and Vercel, asks about overages regarding serverless
function execution. What would be the best way to help mitigate this? Feel free to
use AI to help supplement your answer, but only use AI to help guide your
answer and put it into your own words. You can help the customer by providing
Vercel or Next.js resources if necessary.

</h1>
<h2>
Hello [Customer name],
Greetings from Vercel 

I'd like to let you know that function charges are based on the overall CPU runtime of a Serverless Function. Longer tasks result in higher prices. 
Therefore, if you need a longer execution timeout, you might consider using Edge functions. They must respond within 30 seconds, but can stream endlessly. 

The Usage Dashboard is the most crucial page for monitoring the performance of your projects. The Function Logs tab is another useful tool for monitoring requests and failures because it provides logging output for Serverless Executions. 

Usage limit guidelines for reference: https://vercel.com/docs/limits/fair-use-guidelines
Please let me know if you are looking for an additional support.
Best Regards,
Akansha Chaurasia




</h2>
        </div>
    );
}
export default Question7;
