import React from "react";

function Question3() {
    return (
        <div>
            <h1>3. A customer has reached out asking, “When should I choose to use Edge
Functions, Serverless Functions, or Edge Middleware with Vercel?” Write a reply
to the customer.
</h1>
<h2>
Edge Functions are appropriate for cost-effective functions that run in the data center closest to the user, or a globally distributed database. Vercel's storage options allow you to determine the best location for your database, resulting in lower latency and the ability to provide personalisation at speed.
Link for reference: https://vercel.com/docs/functions/runtimes/edge-runtime
Serverless Functions run in one specified region and allow users to write small chunks of code to add functionality to the application, such as streaming data or running database queries. It runs on demand, with no infrastructure management, server provisioning, or hardware upgrades required.
Link for reference: https://vercel.com/docs/functions/concepts
Edge Middleware can be integrated with any framework. It is an effective method of personalizing statistically generated content which the user can perform custom logic, rewrite, redirect, add headers, and so on before providing a response.
Link for reference: https://vercel.com/docs/functions/edge-middleware

</h2>
        </div>
    );
}
export default Question3;
