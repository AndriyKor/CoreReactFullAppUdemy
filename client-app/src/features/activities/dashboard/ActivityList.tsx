import React from "react";
import { Item, Button, Label, Segment } from "semantic-ui-react";
import { IActivity } from "../../../app/models/activity";

interface IProps {
  activities: IActivity[];
  selectActivity: (id: string) => void;
  deleteActivity: (id: string) => void;
}

export const ActivityList: React.FC<IProps> = ({
  activities,
  selectActivity,
  deleteActivity,
}) => {
  return (
    <div>
      <Segment clearing>
        <Item.Group>
          {activities.map((acttivity) => (
            <Item key={acttivity.id}>
              <Item.Content>
                <Item.Header as="a">{acttivity.title}</Item.Header>
                <Item.Meta>{acttivity.date}</Item.Meta>
                <Item.Description>
                  <div>{acttivity.description}</div>
                  <div>
                    {acttivity.city}, {acttivity.venue}
                  </div>
                </Item.Description>
                <Item.Extra>
                  <Button
                    onClick={() => selectActivity(acttivity.id)}
                    floated="right"
                    content="View"
                    color="blue"
                  ></Button>
                  <Button
                    onClick={() => deleteActivity(acttivity.id)}
                    floated="right"
                    content="Delete"
                    color="red"
                  ></Button>
                  <Label basic content={acttivity.category} />
                </Item.Extra>
              </Item.Content>
            </Item>
          ))}
        </Item.Group>
      </Segment>
    </div>
  );
};
