let alumno = new Alumno ('Pepe', "Feliz", "12-07-1999", "43333333", "1004");

console.log (alumno);

let materia = new Materia ("fisica", "Lu y mie 19:00 a 22:00hs")

materia.addNota(9);

console.log (materia);

materia.addNota(6);

console.log(materia);

let promedioMateria = materia.calcularPromedio();

console.log("promedio materia: " + promedioMateria);

alumno.addMateria(materia);

let m2 = new Materia ("quimica", "ma y ju 19:00 a 22:00hs");

m2.addNota(7);
m2.addNota(5);

alumno.addMateria(m2);

let promAlumno = alumno.calcularPromedio();

console.log("promedio general:", promAlumno);