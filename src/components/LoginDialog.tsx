import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from 'sonner';

interface LoginDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function LoginDialog({ open, onOpenChange }: LoginDialogProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleAuth = async (type: 'login' | 'signup') => {
    setIsLoading(true);
    
    // Simula autenticação
    setTimeout(() => {
      setIsLoading(false);
      toast.info(`${type === 'login' ? 'Login' : 'Cadastro'} temporariamente desabilitado. Conecte o Supabase para ativar!`);
      onOpenChange(false);
    }, 1000);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center bg-gradient-primary bg-clip-text text-transparent">
            Bem-vindo ao ScratchWin
          </DialogTitle>
        </DialogHeader>
        
        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Entrar</TabsTrigger>
            <TabsTrigger value="signup">Cadastrar</TabsTrigger>
          </TabsList>
          
          <TabsContent value="login" className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">E-mail</Label>
              <Input id="email" type="email" placeholder="seu@email.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Senha</Label>
              <Input id="password" type="password" placeholder="••••••••" />
            </div>
            <Button 
              onClick={() => handleAuth('login')}
              className="w-full bg-gradient-primary hover:bg-gradient-success"
              disabled={isLoading}
            >
              {isLoading ? 'Entrando...' : 'Entrar'}
            </Button>
          </TabsContent>
          
          <TabsContent value="signup" className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nome completo</Label>
              <Input id="name" type="text" placeholder="Seu nome" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email-signup">E-mail</Label>
              <Input id="email-signup" type="email" placeholder="seu@email.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password-signup">Senha</Label>
              <Input id="password-signup" type="password" placeholder="••••••••" />
            </div>
            <Button 
              onClick={() => handleAuth('signup')}
              className="w-full bg-gradient-primary hover:bg-gradient-success"
              disabled={isLoading}
            >
              {isLoading ? 'Cadastrando...' : 'Cadastrar'}
            </Button>
          </TabsContent>
        </Tabs>
        
        <div className="text-center text-sm text-muted-foreground border-t pt-4">
          Para ativar o sistema completo de login, conecte seu projeto ao Supabase.
        </div>
      </DialogContent>
    </Dialog>
  );
}