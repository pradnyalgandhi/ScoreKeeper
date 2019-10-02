var jon = {
		  name: 'Jon Smith',
		  mass: 90,
		  height : 1.7,
		   bmiJon : function(){
		  	 this.bmi = this.mass / (this.height * this.height);
		  	return this.bmi;
		  }
		}

var mark = {
		  name: 'Mark Hanigan',
		  mass: 50,
		  height : 1.5,
		   bmiMark : function(){
		  	 this.bmi = this.mass / (this.height * this.height);
		  	return this.bmi;
		  }
		}

jon.bmiJon();
mark.bmiMark();
console.log(jon);
console.log(mark);

if(jon.bmiJon() > mark.bmiMark()) {
	console.log(jon.name+' has a greater bmi of '+ jon.bmiJon());
}
else if(mark.bmiMark()> jon.bmiJon()){
	console.log(mark.name +' has a greater BMI of ' + mark.bmiMark());
}
else {
	console.log('Both have same BMI');
}



