function damage(self) {
    
    // who are you attacking
    let subject = self.subject;
    // how much damage does it deal
    let val = self.val;
    subject.hp -=val;    

}


module.exports = damage;