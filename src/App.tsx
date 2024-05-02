import { Button } from './components/common/Button';
import { Input } from './components/common/Input';
import { UserSelect } from './components/user/UserSelect';

export default function App() {
  return (
    <div className="space-y-6 p-6">
      <h1 className="text-2xl font-medium">Hello</h1>
      <UserSelect />
      <Button>Send</Button>
      <Input suffix="$10000" />
    </div>
  );
}
