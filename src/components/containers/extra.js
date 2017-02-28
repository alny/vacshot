onRateFrag(frag, upOrDown, event){
  event.preventDefault()
  const user = this.props.account.user
  if(user == null){
    toastr.warning('Please Login To Vote')
    return
  }
  if(this.state.hasWatched == false){
    toastr.warning('Watch the Video before Voting')
    return
  }
  this.setState({
    isOpen: false,
    hasWatched: false
  })

  console.log('rateFrag: ' + [frag])
  this.props.fetchFragById([frag])
  .then(response => {
    let result = response.result
    let votes = response.result.votes

    Checking to see if the user are voting on their own frag
    if(user._id == result.profile.id){
      toastr.warning('You Cant Vote on your own Frag!')
      return
    }

    let array = votes['voters']

    let isFound = false
    array.every((voter, i) => {
      if (voter.id == user._id){
        isFound = true
        return false
      }
      return true
    })

    if (isFound) {
      toastr.warning('You already Voted')
      return
    }

    array.push({
      id: user._id
    })
    votes['voters'] = array


    votes['score'] = (votes.score+1)
    result['voters'] = votes

    this.setState({
       isRated: {
          [frag]: true
       }
    });

    console.log('response: ' + JSON.stringify(votes))
    return this.props.updateFrag(frag, {votes: votes})

  })

  // this.props.updateFrag(updated)
}
