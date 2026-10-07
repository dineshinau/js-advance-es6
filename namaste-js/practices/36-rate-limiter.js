function rateLimiter(requests, limit, windowSize) {
    if(!requests || requests.length<1){
        return [];
    }
    const allowed = [];
    const queue= [];

    for(let i=0;i<requests.length;i++){
        const currentTime = requests[i];

        while (queue.length>0 && queue[0] <= currentTime-windowSize) {
            queue.shift()
        }
        if(queue.length<limit){
            allowed.push(i)
            queue.push(currentTime);
        }
    }
    return allowed
}

const req =[[1,2,3,4,5],3,2];
const req1 =[[1,2,3,4,5],2,3];
const req2=[[1,1,1,1,2],3,2]

// console.log(rateLimiter(req[0],req[1],req[2]));      // [0,1,2,3,4]
// console.log(rateLimiter(req1[0],req1[1],req1[2]));      // [0,1,3,4]
// console.log(rateLimiter(req2[0],req2[1],req2[2]));      // [0,1,2]

// console.log(req[0], 'Limit: '+req[1], 'Window size: '+req[2], rateLimiter(req[0],req[1],req[2]).map((i)=> i+':'+req[0][i]));
// console.log(req1[0], 'Limit: '+req1[1], 'Window size: '+req1[2], rateLimiter(req1[0],req1[1],req1[2]).map((i)=> i+':'+req1[0][i]));
// console.log(req2[0], 'Limit: '+req2[2], 'Window size: '+req2[1], rateLimiter(req2[0],req2[1],req2[2]).map((i)=> i+':'+req2[0][i]));

const reqs = [req,req1,req2];

reqs.map((rq) => {
    console.log(rq[0], 'Limit: '+rq[1], 'Window size: '+rq[2], rateLimiter(rq[0],rq[1],rq[2]).map((i)=> i+':'+rq[0][i]));
})

