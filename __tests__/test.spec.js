import initStoryshots, { Stories2SnapsConverter } from '@storybook/addon-storyshots';
import { render } from 'enzyme';
import toJson from 'enzyme-to-json';

const converter = new Stories2SnapsConverter();

initStoryshots({
  test: ({ story, context }) => {
    const snapshotFileName = converter.getSnapshotFileName(context);
    const storyElement = story.render();
    const shallowTree = render(storyElement);

    if (snapshotFileName) {
      expect(toJson(shallowTree)).toMatchSpecificSnapshot(snapshotFileName);
    }
  }
});
