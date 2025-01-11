import axios from "axios"

const commonApi=async(httpmethod,url,reqBody)=>{
 const  reqConfig={
    method:httpmethod,
    url,
    data:reqBody
  }
  return await axios(reqConfig).then(res=>{
    return res
  }).catch(err=>{
    return err
  })
}

export default commonApi