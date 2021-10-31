import { App } from 'vue';

function getFileName(componentPath: string): string {
  const structure = componentPath.split('/');
  const nameFile = structure[structure.length - 1];

  return nameFile.replace('.vue', '');
}

export function setupBaseComponents(app: App): void {
  const components = import.meta.glob('../components/Base/**/*.vue');

  Object.keys(components).forEach(async (componentPath) => {
    const componentName: string = getFileName(componentPath);
    const component = await components[componentPath]();

    app.component(componentName, component.default);
  });
}
