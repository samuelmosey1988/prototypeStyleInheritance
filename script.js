function Speaker (givenName, surname, email, biography, isInLoveWithSam){
    this.givenName = givenName
    this.surname = surname
    this.email = email
    this.biography = biography
    this.isInLoveWithSam = isInLoveWithSam
    this.isActive = true
   }
   
   Speaker.prototype = {
     getBiography: function() {
       console.log(this.givenName + ' ' + this.surname +': ' + this.biography)
     },
     markInactive: function(date){
       this.isActive = false
       this.inactiveDate = date
     },
     constructor: Speaker,
   }
   
   function KeynoteSpeaker(givenName, surname, email, biography, isInLoveWithSam, websites=[]){
     Speaker.call(this, givenName, surname, email, biography, isInLoveWithSam)
    this.websites = websites
   
   }
   KeynoteSpeaker.prototype = Object.create(Speaker.prototype)
   KeynoteSpeaker.prototype.constructor = KeynoteSpeaker
   
   function WorkshopSpeaker(givenName, surname, email, biography, isInLoveWithSam, websites=[], workshopTopics = []){
      Speaker.call(this, givenName, surname, email, biography, isInLoveWithSam)
    this.websites = websites
   
   this.workshopTopics = workshopTopics
   }
   WorkshopSpeaker.prototype = Object.create(Speaker.prototype)
   WorkshopSpeaker.prototype.constructor = WorkshopSpeaker
   
   const samsMom = new Speaker('Andrea', 'Mosey', 'missMySammyBoy@gmail.com', 'mother, animal lover, amateur public speaker', true)
   
   const samsDad = new KeynoteSpeaker('Steve', 'Mosey', 'mySonsDadCouldBeatUpYourSonsDad@gmail.com', 'big and strong, missing my afro', false, ['twitter.com/users/rosanne', 'whyAreMyKidsDoingSoPoorly.com', 'WEBSITE URL BLOCKED BY ADULT CONTENT FILTER'] )
   
   const samsFutureWife = new KeynoteSpeaker('Gertrude', 'Galopagos', 'iluvsam1999@gmail.com', 'housewife, devout christian, mother of six amazing boys.', true, ['goddaily.com', 'CelebacyInAHappyMarriage.com'], ['Overcoming Snapchat Addiction Through God', 'The benefits of a strong christian upbringing in celebate households'])
   
   samsMom.getBiography()
   samsMom.markInactive('1/22/2012')
   samsDad.getBiography()
   console.log(samsDad.websites)
   samsFutureWife.markInactive('TODAY')
   console.log(samsFutureWife.inactiveDate)