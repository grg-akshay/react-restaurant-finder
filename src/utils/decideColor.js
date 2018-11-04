export const decideColor=(rating)=>{
    let res='res_rating '
    if(rating>4.5){
      res+='level-8';
    }
    else if(rating>4.0){
      res+='level-6'
    }
    else if(rating>3.5){
      res+='level-4'
    }
    else if(rating>=3.0){
      res+='level-2'
    }
    else{
      res+='level-0';
    }
    return res;
  }