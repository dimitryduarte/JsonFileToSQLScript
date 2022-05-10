import fs from 'fs';
import { Ec } from './json';
import {formatterCNPJ} from './utils';

const pathOrigin = 'jsonFiles';
const pathDestiny = 'sqlScript';

const querys: string[] = []

const files  = fs.readdirSync(pathOrigin);

files.forEach((file) => {
  let type, membershipQuant, size, cnpj;

  const readFile = fs.readFileSync(`${pathOrigin}/${file}`, 'utf-8');
  const ec : Ec = JSON.parse(readFile);

  cnpj = formatterCNPJ(ec.tax_id);
  size = ec.size;
  type = ec.simples_nacional.simples_optant ? 'SIMPLES NACIONAL' : 'LUCRO REAL/PRESUMIDO';
  membershipQuant = ec.membership.length === 0 ? 1 : ec.membership.length;

  console.log(cnpj);

  querys.push(`Update TABLE_NAME set FIELD_NAME_1 = '${size}', FIELD_NAME_2 = '${type}', FIELD_NAME_3 = ${membershipQuant} where CNPJ = '${cnpj}'`);
});

  console.log(querys);
  fs.writeFileSync(`${pathDestiny}/script.sql`, querys.join('; \n'));
