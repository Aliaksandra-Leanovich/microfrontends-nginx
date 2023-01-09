import { createBrowserHistory } from "history";
import { Button } from "../components/Button";
import { EmailsTable } from "../components/EmailsTable/EmailsTable";
import { ButtonVariants } from "../enums";

export const Users = () => {
  const history = createBrowserHistory();

  const handleBack = () => {
    history.back();
  };

  return (
    <>
      <Button variant={ButtonVariants.secondaryLarge} handleClick={handleBack}>
        Back
      </Button>
      <EmailsTable />
    </>
  );
};
