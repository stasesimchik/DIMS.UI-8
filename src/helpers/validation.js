import {simpleTextRegexp,emailRegexp,directionRegexp,mathRegexp,numberRegexp,universityRegexp} from './constants'

function Validation(name) {
    let Regexp;        
        
    if( name === 'name' ||'lastName' || 'education' || 'skype' || 'address') {
        Regexp = simpleTextRegexp;
    }

    if(name === 'email') { 
        Regexp = emailRegexp
    }

    if(name === 'phone') { 
        Regexp = numberRegexp
    }

    if(name === 'direction') { 
        Regexp = directionRegexp
    }

    if(name === 'start') { 
        Regexp = numberRegexp
    }

    if(name === 'math') { 
        Regexp = mathRegexp
    }

    if(name === 'age') { 
        Regexp = numberRegexp
    }
    if(name === 'university') { 
        Regexp = universityRegexp
    }

    return Regexp

}

export default Validation;