"use strict";
function pow(a, b) {
  debugger;
  if (b === 1) {
    debugger;
    return a;
  } else {
    debugger;
    return a * pow(a, b - 1);
    debugger;
  }
}

pow(5, 4);
debugger;

const studenst = {
  js: [
    {
      name: "Jhon",
      progress: 100,
    },
    {
      name: "Salih",
      progress: 60,
    },
  ],

  html: {
    basic: [
      {
        name: "Muhammad",
        progress: 20,
      },
      {
        name: "Sultan",
        progress: 18,
      },
    ],

    pro: [
      {
        name: "Sam",
        progress: 10,
      },
    ],
	semi:{
		studenst:[
			{
				name: 'Test',
				progress: 100
			}
		]
	}
  },
};

function getTotalProgressByIteration(data) {
	let total = 0;
	let studenst = 0;

	for(let course of Object.values(data)) {
		if(Array.isArray(course)) {
			studenst += course.length;

			for(let i = 0; i < course.length; i++) {
				total += course[i].progress;
			}
		} else {
			for(let subCourse of Object.values(course)) {
				studenst += subCourse.length;

				for(let i = 0; i < subCourse.length; i++) {
					total += subCourse[i].progress;
				}
			}
		}
	}

	return total / studenst;
}



function getTotalProgressByRecursion(data) {
	if(Array.isArray(data)) {
		let total = 0;

		for(let i = 0; i < data.length; i++) {
			total += data[i].progress;
		}

	return [total, data.length]
	}else {
		let total = [0, 0];
		
		for(let subData of Object.values(data)) {
			const subDataArr = getTotalProgressByRecursion(subData);
			total[0] += subDataArr[0];
			total[1] += subDataArr[1];
		}

		return total;
	}
}
const result = getTotalProgressByRecursion(studenst)
console.log(result[0]/result[1]);
console.log(getTotalProgressByIteration(studenst));