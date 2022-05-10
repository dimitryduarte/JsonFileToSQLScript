const formatterCNPJ = (document: string) =>
  document?.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');

const formatterCPF = (document: string) =>
  document?.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');

const formatterDocument = (type: 'CNPJ' | 'CPF', document: string) => {
  const isCPF = type.toLowerCase() === 'cpf';
  const formatted = isCPF ? formatterCPF(document) : formatterCNPJ(document);

  return formatted;
};

export { formatterDocument, formatterCPF, formatterCNPJ };