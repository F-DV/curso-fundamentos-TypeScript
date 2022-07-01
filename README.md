# curso-fundamentos-TypeScript

## INICIAR PROYECTO EN TYPESCRIPT
	1) Instalamos el archivo de configuracion typescript con el comando:
	tsc --init
	2) Descomponemos el directorio de salida y le damos nombre a la carpeta de salida en el archivo de configuración en la parte de modules:
	
	"outDir": "./dist",
	
	3) Ejecutamos el comando para reconocer los cambios en el archivo de configuración:
	
	tsc (crea los archivos de salida)
	
	4) Ejecutamos el proyecto con el comando:
	 node dist/script.js

	5) Levantamos el servicio que ve constantemente los cambios en los archivos typescript:
	tsc --watch
    
	6) Abrimos otra terminal ubunto y ejecutamos el comando de ejemplo:
    node /dist/ejemplo.js